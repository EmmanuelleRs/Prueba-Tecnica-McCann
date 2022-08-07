from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import RegistrySerializer

class RegistyAPI(APIView):
    @csrf_exempt
    def post(self, request):
        serializer = RegistrySerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

