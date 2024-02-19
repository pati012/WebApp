

export default function clearClass(element, className){
    if(element.length > 0){
        element.forEach(item => {
            item.classList.remove(`${className}`);
        });
    }
 }