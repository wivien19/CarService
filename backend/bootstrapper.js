const mongoose = require('mongoose');
// #2 mivel már regisztráltuk, a sémánkat le tudjuk kérni a mongoose-on keresztül is a megfelelő kollekcióra történő hivatkozással
const User = mongoose.model('user');

async function ensureAdminExists() {
  try {
    console.log("valami")
   //console.log(User.findOne({ accessLevel: 3 }))
    // Ellenőrizzük, van-e már admin felhasználó az adatbázisban
    const admin = await User.findOne({ accesLevel: 3 }); //a findOne-nal jelezzük, hogy pontosan egy darab usert keresünk
    console.log(admin)
     if (admin) { //ha kaptunk vissza objektumot, akkor ez a feltétel igazra teljesül, ha üres/undefine, akkor hamisra
       console.log('Az admin felhasználó már megtalálható az adatbázisban!');
     } else {
      // Ha nincs, akkor létrehozunk egy újat
      const newAdmin = new User({
        username: 'admin',
        password: 'admin123',
        accessLevel: 3,
        email: 'admin@admin.hu'
      });
      console.log(newAdmin)
      await newAdmin.save((error, data) =>{
        if (error) console.log(error);
      });

      console.log('Az admin felhasználó sikeresen létrehozva!');
    }
  } catch (error) {
    console.error('Hiba történt az admin ellenőrzése vagy létrehozása során: ', error);
  }
}

module.exports = ensureAdminExists;