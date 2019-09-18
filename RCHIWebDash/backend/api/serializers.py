from rest_framework import serializers
from backend.models import HouseholdsByCityYearInterview, SubpopulationsByCity2019, VolunteerDeployment,Trends, SubpopulationsByYear, HouseholdsByCityYearInterview

class HouseholdsByCityYearInterviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseholdsByCityYearInterview
        fields = '__all__'

class SubpopulationsByCity2019Serializer(serializers.ModelSerializer):
    class Meta:
        model = SubpopulationsByCity2019
        fields = '__all__'

class SubpopulationsByYearSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubpopulationsByYear
        fields = '__all__'

class VolunteerDeploymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = VolunteerDeployment
        fields = '__all__'


class  TrendsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trends
        fields = '__all__'

# class GeneralSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = GeneralCount
#         fields = '__all__'
