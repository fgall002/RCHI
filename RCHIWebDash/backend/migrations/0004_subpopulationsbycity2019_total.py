# Generated by Django 2.2.6 on 2020-02-06 08:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_generaltablesubpopulationssheltered2019'),
    ]

    operations = [
        migrations.AddField(
            model_name='subpopulationsbycity2019',
            name='total',
            field=models.IntegerField(default=-1),
            preserve_default=False,
        ),
    ]