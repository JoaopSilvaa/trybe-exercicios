const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const damageDragon = () => Math.round(Math.random() *15) + dragon.strength;

  const damageWarrior = () => Math.round(Math.random() * ((warrior.strength) + warrior.strength * warrior.weaponDmg));
  
  const attackMage = () => {
      const attack = {
          damageMage:  Math.round(Math.random() * ((mage.intelligence) + mage.intelligence * 2)),
          manaMage: 15
      }
      if (mage.mana < 15) {
        attack.damageMage = 'Não possui mana suficiente';
        attackMage.manaMage = 0;
      }
      return attack;
  }

  const gameActions = {
      turnWarrior : (damageWarrior) => {
        const damageWarriorInDragon = damageWarrior();
        dragon.healthPoints -= damageWarriorInDragon;
        warrior.damage = damageWarriorInDragon
      },
      turnMage: (attackMage) => {
          const damageMageInDragon = attackMage();
          dragon.healthPoints -= damageMageInDragon.damageMage;
          mage.damage = damageMageInDragon.damageMage;
          mage.mana -= damageMageInDragon.manaMage;
      },
      turnDragon: (damageDragon) => {
          const damageDragonInWarrior = damageDragon();
          const damageDragonInMage = damageDragon();
          dragon.damage = damageDragonInMage + damageDragonInWarrior;
          mage.healthPoints -= damageDragonInMage;
          warrior.healthPoints -= damageDragonInWarrior;
      },
      finalRound: () => battleMembers,   
  };
  gameActions.turnWarrior(damageWarrior);
  gameActions.turnMage(attackMage);
  gameActions.turnDragon(damageDragon);
  console.log(gameActions.finalRound());