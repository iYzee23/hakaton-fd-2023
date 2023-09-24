# Generated by Django 4.2.5 on 2023-09-23 22:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Application', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bill',
            fields=[
                ('idbill', models.AutoField(primary_key=True, serialize=False)),
                ('energy_drink_cnt', models.IntegerField(blank=True, null=True)),
                ('protein_bar_cnt', models.IntegerField(blank=True, null=True)),
                ('antifriz_cnt', models.IntegerField(blank=True, null=True)),
                ('tenost_za_staklo_cnt', models.IntegerField(blank=True, null=True)),
                ('coffe_cnt', models.IntegerField(blank=True, null=True)),
                ('fuel_liters', models.IntegerField(blank=True, null=True)),
                ('date', models.DateField(blank=True, null=True)),
            ],
            options={
                'db_table': 'bill',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='CouponIssued',
            fields=[
                ('event_unique_id', models.AutoField(primary_key=True, serialize=False)),
                ('item', models.CharField(blank=True, max_length=45, null=True)),
                ('percentage', models.IntegerField(blank=True, null=True)),
                ('issued_date', models.DateField(blank=True, null=True)),
            ],
            options={
                'db_table': 'coupon_issued',
                'managed': False,
            },
        ),
    ]
