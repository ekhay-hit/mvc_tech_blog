const dayjs =require("dayjs");
// using dayjs to format the date
module.exports ={

formatDate:(date) =>{
        
        const newDate = dayjs(date).format('MM/DD/YY');
        console.log(newDate);
       return newDate;
    }
}

