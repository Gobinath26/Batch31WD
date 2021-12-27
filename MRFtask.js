const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];
  //-------------------------Task-1------------------------------------------
    // const getmark =scores.map((score)=>score.marks);
    // console.log(getmark);
    // const total = getmark.reduce((sum,curr)=>sum+curr,0);
    //  console.log(total);
    //  const average = total/getmark.length;
    //  console.log(average);

  //-------------------------Task-2------------------------------------------
  // const topmark = scores.filter((score)=>score.marks>90);
  // console.log(topmark);
  // const toppername = topmark.map((score)=>score.name);
  // console.log(toppername);

            //---------Another way---------------

// const toppername = scores
//     .filter((score)=>score.marks>90) //[]
//     .map((score)=>score.name);
//   console.log(toppername);

//-------------------Another way--------------------------------

    // console.log(scores
    // .filter((score)=>score.marks>90) //[]
    // .map((score)=>score.name));

 //--------------Another way----------------------

//   const getMark = (score)=>score.marks>90;
//   const getname = (score)=>score.name;
//   const topperName = scores
//     .filter(getMark) //[]
//     .map(getname);
//     console.log(topperName);
  
    