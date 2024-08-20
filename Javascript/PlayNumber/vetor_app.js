
export function showMenu(archive, title){
    let count = 0;
    console.log(title)
    for (let pharse of archive){
        count++;
        if (count < 10){
            console.log(`|0${count} - |${pharse}`);
        }
        else{
        console.log(`|${count} - |${pharse}`);
        }
    }
}