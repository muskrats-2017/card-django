from django.shortcuts import render

from django.views.generic import View
from django.contrib.auth.mixins import LoginRequiredMixin

from cards.models import Card
from cards.forms import CardForm
# Create your views here.



class IndexCardView(LoginRequiredMixin, View):

	def get(self, request):
		return render(request, 'cards/index.html')

class CreateCardView(LoginRequiredMixin, View):

	form_class = CardForm
	template_name = 'cards/index.html'
	success_url = 'cards:index'
	
	def get(self, request):
		card_form = self.form_class()
		return render(request, self.template_name, {'card_form':card_form})

	def post(self,request):
		card_form = self.form_class(request.POST)
		if card_form.is_valid():
			card = card_form.save(commit=False)
			card.save()
			return redirect(self.success_url)

		else:
			return render(request, self.template_name, {'card_form':card_form})