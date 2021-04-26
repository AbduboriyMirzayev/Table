export default function (data,page,size){
    const startIndex = Math.round((page-1) * size);
    const result = data.slice(startIndex,startIndex+size);
    return result;
}