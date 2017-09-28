from django.db import models
from django.utils import timezone
from django.utils.text import slugify
from django.contrib.auth import get_user_model
from django.contrib.contenttypes.fields import GenericForeignKey, GenericRelation
from django.contrib.contenttypes.models import ContentType

User = get_user_model()

class Card(models.Model):
	title = models.CharField(max_length=30)
	
	content = models.TextField()
	color = models.CharField(max_length=30)
	
	user = models.ForeignKey(User)

	def __str__(self):
		return self.title