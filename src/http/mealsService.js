export const getRandomMeal = async() => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php',
    {
        method: 'GET',
    }
    )
    return await response.json()
}