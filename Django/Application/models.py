from django.db import models


class User(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)
    username = models.CharField(db_column='Username', unique=True, max_length=45)
    password = models.CharField(db_column='Password', max_length=45)
    firstname = models.CharField(db_column='FirstName', max_length=45)
    lastname = models.CharField(db_column='LastName', max_length=45)

    class Meta:
        managed = False
        db_table = 'user'
