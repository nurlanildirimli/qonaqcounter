const firebaseConfig = {
    apiKey: "AIzaSyAl2yKHf8AJfrIWBPOZN--nD-5OVDI1d3Y",
    authDomain: "qonaqcounter.firebaseapp.com",
    databaseURL: "https://qonaqcounter-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "qonaqcounter",
    storageBucket: "qonaqcounter.appspot.com",
    messagingSenderId: "315316443980",
    appId: "1:315316443980:web:79405825aa75472585cde9"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  function get()
  {
    var ad = document.getElementById('ad').value
    var soyad = document.getElementById('soyad').value
    //var ad = document.getElementById('ad').value

    var qonaq_ref = database.ref(ad+" "+soyad)
    qonaq_ref.on('value',function(snapshot){
        var data = snapshot.val()
        alert(data.ad+" "+data.soyad+" "+data.gelib+" "+data.otur)
    })
  }