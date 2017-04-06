## Program API Crud Sederhana

Program ini dibuat sebagai tantangan untuk menyelesaikan UTS di tempat les saya tercinta. Program dibuat dengan menggunakan express dan juga mongoDB.
Untuk Collection

API yang terdapat dalam program ini adalah :
```
>> get all data (url: http://localhost:3000/api/(nama-collection))
>> get one data (url: http://localhost:3000/api/(nama-collection)/id)
>> create data  (url: http://localhost:3000/api/(nama-collection)/)
>> update data  (url: http://localhost:3000/api/(nama-collection)/id)
>> remove data  (url: http://localhost:3000/api/(nama-collection)/id)

contoh :
untuk get all restaurant : (get) http://localhost:3000/api/restaurants
untuk get all food : (get) http://localhost:3000/api/foods
untuk create food : (post) http://localhost:3000/api/foods
untuk update food : (put) http://localhost:3000/api/foods/id
untuk delete food : (delete) http://localhost:3000/api/foods/id
untuk insert menu : (post) http://localhost:3000/api/restaurants/insertMenu

```

untuk dapat menjalankan program ini pastikan mongoDB telah terinstal dalam perangkat anda, lalu ikutilah langkah-langkah dibawah :

```
dalam command line :
>> npm install
>> sudo service mongod start (untuk ubuntu/linux lainnya)
>> brew services start mongodb (untuk macOS)
>> node app.js

Gunakan Postman atau CURL untuk mengakses API
```
