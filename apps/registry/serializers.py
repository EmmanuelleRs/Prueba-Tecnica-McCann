from rest_framework import serializers
from .models import RegistyModel

class RegistrySerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistyModel
        fields = '__all__'
    def validate(self, value):
        registry = RegistyModel.objects.filter(
            email = value['email'],
            phone = value['phone'],
            brand = value['brand'],
            vehicle = value['vehicle'],
        )
        if registry.exists():
            raise serializers.ValidationError('Este usuario ya se registró')
        return value