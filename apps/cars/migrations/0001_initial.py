# Generated by Django 4.0.6 on 2022-08-07 22:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BrandModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brand_name', models.CharField(max_length=15, verbose_name='Brand Name')),
            ],
        ),
        migrations.CreateModel(
            name='VehicleModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vehicle_name', models.CharField(max_length=15, verbose_name='Vechicle Name')),
                ('vehicle_brand', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='vehicles', to='cars.brandmodel')),
            ],
        ),
    ]
