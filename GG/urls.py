from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('aboutus/', views.aboutus_view, name='aboutus'),
    path('contactus/', views.contactus_view, name='contactus'),
    path('services/', views.service_view, name='services'),
    # path('get_response/', views.get_response, name='get_response'),
]