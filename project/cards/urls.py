from django.conf.urls import url


from cards import views



urlpatterns = [
	url(r'^$', views.IndexCardView.as_view(), name='index'),
	url(r'^$', views.CreateCardView.as_view(), name='create')

]