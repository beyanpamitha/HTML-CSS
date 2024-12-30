(function() {
    const names = ["John", "Paul", "Jenny", "George", "James", "Mary", "Jack", "Linda"];
    
    for (let name of names) {
      if (name[0].toLowerCase() === 'j') {
        console.log(`Goodbye ${name}`);
      } else {
        console.log(`Hello ${name}`);
      }
    }
  })();
  