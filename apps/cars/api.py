from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import BrandSerialzer
from .models import BrandModel

class VehiclesAPI(APIView):
    def get(self, request):
        vehicles = BrandSerialzer(BrandModel.objects.all(), many=True)
        return Response(vehicles.data)