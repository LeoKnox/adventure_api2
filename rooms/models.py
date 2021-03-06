from django.db import models

class Room(models.Model):
    room_name = models.CharField(max_length=200, blank=False)
    description = models.TextField(blank=True)
    width = models.CharField(blank=False, default="5", max_length=10)
    length = models.CharField(blank=False, default="5", max_length=10)

    def __str__(self):
        return f"{self.room_name}: {self.width} by {self.length}"