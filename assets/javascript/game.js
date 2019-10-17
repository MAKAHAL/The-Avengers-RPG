let CA= {
    HealthPoints: 100,
    AttackPower: 20, 
    CounterAttackPower: 50,
    
}
let IronMan= {
    HealthPoints: 100,
    AttackPower: 20, 
    CounterAttackPower: 50,
    
}
let Thanos= {
    HealthPoints: 100,
    AttackPower: 20, 
    CounterAttackPower: 50,
    
}
let Thor= {
    HealthPoints: 100,
    AttackPower: 20, 
    CounterAttackPower: 50,
    
}
const PrintToScreen = () => {
 document.getElementById('CA-Health').innerText= CA.HealthPoints;
 document.getElementById('IronMan-Health').innerText= IronMan.HealthPoints; 
 document.getElementById('Thanos-Health').innerText= Thanos.HealthPoints; 
 document.getElementById('Thor-Health').innerText= Thor.HealthPoints;

}
PrintToScreen();
