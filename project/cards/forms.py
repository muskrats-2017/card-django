from django import forms
from django.contrib.auth import get_user_model

from cards.models import Card


User = get_user_model()

class BaseForm(forms.ModelForm):

	def as_json(self):
		
		data = {}
		input_template = '{label}{field}<span class="helptext">{help_text}</span>'
		for name in self.fields:
			data[name] = input_template.format(
				label=self[name].label_tag(), 
				field=self[name].as_widget(), 
				help_text=self[name].help_text
			)
		return data



class CardForm(BaseForm):
	
	class Meta:
		model = Card
		fields = ['title', 'content', 'color']