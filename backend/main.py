from fastapi import FastAPI, Response, Cookie
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional

app = FastAPI(title="DNA API")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# "DB"
scientists_db = [
    {
        "id": "einstein",
        "name": "Альберт Эйнштейн",
        "years": "1879 – 1955",
        "bio": "Один из основателей современной теоретической физики, лауреат Нобелевской премии.",
        "contribution": "Теория относительности, формула эквивалентности массы и энергии (E=mc²)."
    },
    {
        "id": "newton",
        "name": "Исаак Ньютон",
        "years": "1643 – 1727",
        "bio": "Английский физик, математик и астроном, один из создателей классической физики.",
        "contribution": "Закон всемирного тяготения и три закона механики."
    },
    {
        "id": "tesla",
        "name": "Никола Тесла",
        "years": "1856 – 1943",
        "bio": "Изобретатель в области электротехники и радиотехники, инженер, физик.",
        "contribution": "Устройства, работающие на переменном токе, многофазные системы, электродвигатель."
    },
    {
        "id": "curie",
        "name": "Мария Кюри",
        "years": "1867 – 1934",
        "bio": "Французский и польский физик-экспериментатор и химик. Первая женщина — лауреат Нобелевской премии.",
        "contribution": "Исследование радиоактивности, открытие элементов радия и полония."
    },
    {
        "id": "bohr",
        "name": "Нильс Бор",
        "years": "1885 – 1962",
        "bio": "Датский физик-теоретик и общественный деятель, один из создателей современной физики.",
        "contribution": "Квантовая теория атома, основы квантовой механики."
    },
    {
        "id": "feynman",
        "name": "Ричард Фейнман",
        "years": "1918 – 1988",
        "bio": "Выдающийся американский физик, один из создателей квантовой электродинамики.",
        "contribution": "Диаграммы Фейнмана, квантовая электродинамика, концепция нанотехнологий."
    }
]

@app.get("/")
def read_root():
    return {"message": "Welcome to the DNA API"}

@app.get("/api/scientists")
def get_scientists():
    """Возвращает список всех ученых"""
    return scientists_db

@app.get("/api/scientists/{scientist_id}")
def get_scientist_by_id(scientist_id: str):
    """Возвращает данные конкретного ученого по ID"""
    for scientist in scientists_db:
        if scientist["id"] == scientist_id:
            return scientist
    return {"error": "Scientist not found"}

# Эндпоинт для сохранения выбора ученого в куки
@app.post("/api/scientists/{scientist_id}/select")
def select_scientist(scientist_id: str, response: Response):
    """Сохраняет выбор пользователя (ID ученого) в куки"""
    # проверка на существование ученого
    if not any(s["id"] == scientist_id for s in scientists_db):
        return {"error": "Scientist not found"}
        
    # Устанавка куки
    response.set_cookie(
        key="selected_scientist",
        value=scientist_id,
        max_age=30 * 24 * 60 * 60, # 30 дней хранения
        httponly=True,
        samesite="lax"
    )
    return {"message": f"Scientist {scientist_id} saved to cookies!"}

@app.get("/api/init")
def get_initial_state(selected_scientist: Optional[str] = Cookie(None)):
    """Возвращает стартовые данные при загрузке страницы фронтенда"""
    # Если куки есть, поиск ученого в базе
    if selected_scientist:
        for scientist in scientists_db:
            if scientist["id"] == selected_scientist:
                return {
                    "type": "saved_selection", 
                    "data": scientist
                }
                
    # Если куки нет или ученый не найден, базовая панель
    return {
        "type": "default_view", 
        "message": "Показываем базовую панель"
    }