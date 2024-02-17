function createSelectBox(startYear, endYear) {
    
    document.write(`<select>`);
    for(let year = startYear; year <= endYear; year++) {
        document.write(`<option value = "${year}">${year}</option>`);
    }
    document.write(`</select>`);
}
createSelectBox(2000, 2021);