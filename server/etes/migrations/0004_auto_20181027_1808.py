# Generated by Django 2.1.2 on 2018-10-28 01:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('etes', '0003_ticket_ticket_event'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ticket',
            old_name='tic_type',
            new_name='ticket_type',
        ),
    ]