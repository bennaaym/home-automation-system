
export const getProgressBarColors = (temperature)=> {
    const Hot = ["#E3170A", "#FA9189" ];
    const Cool =["#79A352", "#B3D6AE"]
    const Cold = ["#36B9D3", "#9BDCE9"]
    if(temperature > 30) return Hot
    else if (temperature > 10) return Cool
    else return Cold
}