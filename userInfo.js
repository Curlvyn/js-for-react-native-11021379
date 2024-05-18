function createUserProfiles(names, modifiedNames) {
    const userProfiles = [];
  
    for (let i = 0; i < names.length; i++) {
      const originalName = names[i];
      const modifiedName = modifiedNames[i];
      const id = i + 1; // Auto-incremented ID starting from 1
  
      userProfiles.push({
        originalName,
        modifiedName,
        id,
      });
    }
  
    return userProfiles;
  }
  
  // Example usage:
  const originalNames = ['Kelvin', 'Kofi', 'Obikyere']; 
  const modifiedNames = ['KELVIN', 'kofi', 'OBIKYERE']; 
  
  const profiles = createUserProfiles(originalNames, modifiedNames);
  console.log(profiles); // Array of objects with originalName, modifiedName, and id
  