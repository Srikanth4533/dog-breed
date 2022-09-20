export function filterResult(arr, val) {
    return arr.filter(d => {
        let name = d.name.toLowerCase().split(" ").join("")
        return name.includes(val.replace(/\W/g, ''))
      })
}

