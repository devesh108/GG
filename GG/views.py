from django.shortcuts import render
# from .webpages_logic_script import get_webpages_response

def home(request):
    return render(request, 'webpages/home.html')

def aboutus_view(request):
    return render(request, 'webpages/aboutus.html')

def contactus_view(request):
    return render(request, 'webpages/contactus.html')

def service_view(request):
    return render(request, 'webpages/services.html')
