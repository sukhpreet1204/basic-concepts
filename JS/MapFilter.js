const GROUP_A = [
    { id: 3, status: 201, name: "Tim" },
    { id: 1, status: 200, name: "Apu" },
    { id: 2, status: 200, name: "Becky" },
    { id: 4, status: 201, name: "Tim" },
    { id: 5, status: 200, name: "Mallory" },
    { id: 7, status: 201, name: "Armstrong" },
    { id: 8, status: 201, name: "Harini" },
    { id: 6, status: 201, name: "Pavel" }
  ];
  const GROUP_B = [
    { id: 30, status: 200, name: "Barnaby" },
    { id: 42, status: 200, name: "Vladimir" },
    { id: 52, status: 200, name: "Palomar" },
    { id: 62, status: 200, name: "Jenkins" },
    { id: 40, status: 301, name: "Vladimir" },
    { id: 20, status: 300, name: "Janet" }
  ];

  // A) write function to find all status 200 family members

  function getStatus(GROUP_A,GROUP_B){
      return GROUP_A.concat(GROUP_B).filter(element => {
          return element.status===200;
      })
  }

  console.log(getStatus(GROUP_A, GROUP_B));

  /*
  B) write function to return entries in this format:
        id - status : name,
        where the ID is followed by a "-"
        the status is followed by a ":" and the name
        delimited by comma
  */

    function getFormat(GROUP_A,GROUP_B){
        return GROUP_A.concat(GROUP_B).map(element => {
            return element.id + " - " + element.status + " : "+ element.name;
        }).join(",");
    }

    console.log(getFormat(GROUP_A, GROUP_B));

    // C) write function to list unique names ordered by id

    function getUniqueNames(GROUP_A, GROUP_B){
        const group = GROUP_A.concat(GROUP_B);
        group.sort((a,b) => a.id-b.id);

        return group.map(element => element.name)
            .filter((value, index, self) => {
                return self.indexOf(value) === index;
            })
    }

    console.log(getUniqueNames(GROUP_A, GROUP_B));