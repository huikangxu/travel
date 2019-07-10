let defaultCity = '北京'
try {
    if(localStorage){
        defaultCity = localStorage.city
    }
}catch (e) {}

export default {
    city: defaultCity
}
