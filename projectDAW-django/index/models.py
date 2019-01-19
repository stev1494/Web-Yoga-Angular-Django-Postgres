from django.db import models
from datetime import date, datetime


class Client(models.Model):
    name = models.CharField(max_length = 50)
    surname = models.CharField(max_length = 50)
    address = models.CharField(max_length = 100)
    phone = models.CharField(max_length = 10)
    is_active = models.BooleanField(default = True)

class Product(models.Model):
    name = models.CharField(max_length = 50, unique = True)
    price = models.FloatField(null = True, blank = True, default = None)

class User(models.Model):
    username = models.CharField(max_length = 10, unique = True)
    password = models.CharField(max_length = 20, default = '')
    id_client = models.ForeignKey('Client', null = True, blank = True, on_delete = models.CASCADE)

class Work_Area(models.Model):
    area_name =  models.CharField(max_length = 100)
    salary = models.FloatField(default = 500)

class Employee(models.Model):
    name = models.CharField(max_length = 50)
    surname = models.CharField(max_length = 50)
    address = models.CharField(max_length = 100)
    phone = models.CharField(max_length = 10)

class Admin(models.Model):
    username = models.CharField(max_length = 10, unique = True)
    password = models.CharField(max_length = 20)
    id_employee = models.ForeignKey('Employee', null = True, blank = True, on_delete = models.CASCADE)

class Market(models.Model):
    quantity = models.IntegerField()
    id_product = models.ForeignKey('Product', null = True, blank = True, on_delete = models.CASCADE)

class Service(models.Model):
    description = models.TextField()
    type = models.CharField(max_length = 50)
    price = models.FloatField(null = True, blank = True, default = None)
    is_active = models.BooleanField(default = True)

class Appointment(models.Model):
    name = models.CharField(max_length = 30)
    date = models.DateTimeField(default=datetime.now, blank=True)
    service = models.CharField(max_length =50)
    id_client = models.ForeignKey('Client', null = True, blank = True, on_delete = models.CASCADE)

class Service_Appointment(models.Model):
    id_service = models.ForeignKey('Service', null = True, blank = True, on_delete = models.CASCADE)
    id_appointment = models.ForeignKey('Appointment', null = True, blank = True, on_delete = models.CASCADE)

class Service_Area(models.Model):
    id_work_area = models.ForeignKey('Work_Area', null = True, blank = True, on_delete = models.CASCADE)
    id_service = models.ForeignKey('Service', null = True, blank = True, on_delete = models.CASCADE)

class Service_Employee(models.Model):
    id_employee_area = models.ForeignKey('Work_Area', null = True, blank = True, on_delete = models.CASCADE)
    id_service = models.ForeignKey('Service', null = True, blank = True, on_delete = models.CASCADE)
