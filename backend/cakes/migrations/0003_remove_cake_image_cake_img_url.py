# Generated by Django 4.2.1 on 2023-06-03 21:09

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('cakes', '0002_remove_order_date_order_created_at_cakeview_cakelike'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cake',
            name='image',
        ),
        migrations.AddField(
            model_name='cake',
            name='img_url',
            field=models.CharField(default=django.utils.timezone.now, max_length=200),
            preserve_default=False,
        ),
    ]
