# Generated by Django 4.2.5 on 2023-09-22 21:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(db_column='ID', primary_key=True, serialize=False)),
                ('username', models.CharField(db_column='Username', max_length=45, unique=True)),
                ('password', models.CharField(db_column='Password', max_length=45)),
                ('firstname', models.CharField(db_column='FirstName', max_length=45)),
                ('lastname', models.CharField(db_column='LastName', max_length=45)),
            ],
            options={
                'db_table': 'user',
                'managed': False,
            },
        ),
    ]