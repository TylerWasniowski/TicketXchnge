from django.contrib.auth.base_user import BaseUserManager
from django.db import models


class UserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError('The email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, password=password, **extra_fields)
        user.save(using=self._db)
        return user


class TicketManager(models.Manager):
    use_in_migrations = True

    def create_ticket(self, ticket_event, ticket_type, ticket_price, eventId, ticket_quantity, ownerId):
        ticket = self.model(ticket_event=ticket_event,
                            ticket_type=ticket_type, ticket_price=ticket_price, ticket_quantity=ticket_quantity, owner=ownerId, event=eventId)
        ticket.save(using=self._db)
        return ticket


class EventManager(models.Manager):
    use_in_migrations = True

    def create_event(self, event_name, event_venue, event_date, start_time, **extra_fields):
        if not event_venue:
            raise ValueError('Must have event venue')
        event = self.model(event_name=event_name,
                           event_venue=event_venue, event_date=event_date, start_time=start_time)
        event.save(using=self._db)
        return event
