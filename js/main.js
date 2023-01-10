let elInp = document.querySelector('.inp')
const arr = ["abduraxmon", "bekzodbek", "muhammadnosir", "muhammadsodiq", "isroilbek", "sobirjon", "abrorbek", "shuxratbek", "nasibillo", "ahmadillo", "mavlonbek", "jaloliddin"]

function test() {
    let filData = arr.filter((e) => e.includes(elInp.value) == true)
    console.log(filData);
}