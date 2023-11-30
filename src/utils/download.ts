export const downloadFile = (url: string, name = 'example') => {
    var a = document.createElement('a')
    a.href = url
    a.download =  name;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click(); 
    document.body.removeChild(a);
}