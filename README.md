## Program API Crud Sederhana

Program ini dibuat sebagai tantangan untuk menyelesaikan UTS di tempat les saya tercinta. Program dibuat dengan menggunakan express dan juga mongoDB.

API yang terdapat dalam program ini adalah :
```
>> get all data (url: http://localhost:3000/api/(nama-collection)/getdata)
>> get one data (url: http://localhost:3000/api/(nama-collection)/getone)
>> create data  (url: http://localhost:3000/api/(nama-collection)/create)
>> update data  (url: http://localhost:3000/api/(nama-collection)/update)
>> remove data  (url: http://localhost:3000/api/(nama-collection)/remove)
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
