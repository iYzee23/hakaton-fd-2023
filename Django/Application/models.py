from django.db import models


class Bill(models.Model):
    idbill = models.AutoField(primary_key=True)
    energy_drink_cnt = models.IntegerField(blank=True, null=True)
    protein_bar_cnt = models.IntegerField(blank=True, null=True)
    antifriz_cnt = models.IntegerField(blank=True, null=True)
    tenost_za_staklo_cnt = models.IntegerField(blank=True, null=True)
    coffe_cnt = models.IntegerField(blank=True, null=True)
    fuel_liters = models.IntegerField(blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    id = models.ForeignKey('User', models.DO_NOTHING, db_column='ID', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'bill'


class CouponIssued(models.Model):
    event_unique_id = models.AutoField(primary_key=True)
    item = models.CharField(max_length=45, blank=True, null=True)
    percentage = models.IntegerField(blank=True, null=True)
    issued_date = models.DateField(blank=True, null=True)
    id_user = models.ForeignKey('User', models.DO_NOTHING, db_column='ID_user', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'coupon_issued'



class User(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)  # Field name made lowercase.
    username = models.CharField(db_column='Username', max_length=45)  # Field name made lowercase.
    password = models.CharField(db_column='Password', max_length=45)  # Field name made lowercase.
    firstname = models.CharField(db_column='FirstName', max_length=45)  # Field name made lowercase.
    lastname = models.CharField(db_column='LastName', max_length=45)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'user'