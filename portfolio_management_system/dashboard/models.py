from django.db import models
from django.contrib.auth.models import User
from django.db.models import JSONField

class Portfolio(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE)
  total_investment = models.FloatField(default=0)

  def update_investment(self):
    investment = 0
    holdings = StockHolding.objects.filter(portfolio=self)
    for c in holdings:
      investment += c.investment_amount
    self.total_investment = investment
    self.save()

  def __str__(self):
    return "Portfolio : " + str(self.user)


class StockHolding(models.Model):
  portfolio = models.ForeignKey(Portfolio, on_delete=models.CASCADE)
  company_symbol = models.CharField(default='', max_length=25)
  company_name = models.CharField(max_length=100)
  sector = models.CharField(default='', max_length=50)
  number_of_shares = models.IntegerField(default=0)
  investment_amount = models.FloatField(default=0)
  buying_value = JSONField(default=list)

  def save(self, *args, **kwargs):
    inv_amount = 0.0
    num_shares = 0
    for price, quantity in self.buying_value:
      inv_amount += price * quantity
      num_shares += quantity
    self.investment_amount = inv_amount
    self.number_of_shares = num_shares
    super(StockHolding, self).save(*args, **kwargs)

  def __str__(self):
    return str(self.portfolio) + " -> " + self.company_symbol + " " + str(self.number_of_shares)



#-----------------------newly added-------------------
# class AMC(models.Model):
#   name = models.CharField(max_length=255, unique=True)
#   website = models.URLField(blank=True, null=True)
#   contact_email = models.EmailField(blank=True, null=True)
#
#   def __str__(self):
#     return self.name
#
#
# class InvestmentOption(models.Model):
#   INVESTMENT_TYPE_CHOICES = [
#     ("MF", "Mutual Fund"),
#     ("Stock", "Stock")
#   ]
#
#   name = models.CharField(max_length=255)  # Fund Name or Stock Name
#   investment_type = models.CharField(max_length=10, choices=INVESTMENT_TYPE_CHOICES)
#   amc = models.ForeignKey(AMC, on_delete=models.CASCADE, related_name="schemes", null=True, blank=True)  # Only for MF
#   stock_symbol = models.CharField(max_length=20, unique=True, null=True, blank=True)  # Only for Stocks
#   asset_type = models.CharField(max_length=50, choices=[("Equity", "Equity"), ("Debt", "Debt"), ("Hybrid", "Hybrid")],
#                                 null=True, blank=True)  # Only for MF
#   category = models.CharField(max_length=100, blank=True, null=True)  # Only for MF
#   is_active = models.BooleanField(default=True)
#
#   def __str__(self):
#     return f"{self.name} ({self.investment_type})"
#
# class Client(models.Model):
#   name = models.CharField(max_length=255)
#   email = models.EmailField(unique=True)
#   phone = models.CharField(max_length=15, unique=True)
#   pan_card = models.CharField(max_length=10, unique=True)
#   kyc_verified = models.BooleanField(default=False)
#
#   def __str__(self):
#     return self.name
#
#
# class SIP(models.Model):
#   client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name="sips")
#   stock_scheme = models.ForeignKey(InvestmentOption, on_delete=models.CASCADE, related_name="sips")
#   start_date = models.DateField()
#   sip_amount = models.DecimalField(max_digits=10, decimal_places=2)
#   sip_frequency = models.CharField(max_length=20, choices=[("Monthly", "Monthly"), ("Quarterly", "Quarterly")])
#   tenure_months = models.PositiveIntegerField()  # SIP duration in months
#   is_active = models.BooleanField(default=True)
#
#   def __str__(self):
#     return f"SIP: {self.client.name} - {self.stock_scheme.name} - {self.sip_amount}/ {self.sip_frequency}"
#
#
# class Transaction(models.Model):
#   client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name="transactions")
#   stock_scheme = models.ForeignKey(InvestmentOption, on_delete=models.CASCADE, related_name="transactions")
#   transaction_type = models.CharField(max_length=10, choices=[("BUY", "Buy"), ("SELL", "Sell")])
#   units = models.DecimalField(max_digits=10, decimal_places=4)
#   nav = models.DecimalField(max_digits=10, decimal_places=4)
#   transaction_date = models.DateField(auto_now_add=True)
#   sip = models.ForeignKey(SIP, on_delete=models.SET_NULL, null=True, blank=True, related_name="sip_transactions")
#   dividend_amount = models.DecimalField(max_digits=12, decimal_places=2, null=True,blank=True)  # New field for dividends
#   def total_value(self):
#     return self.units * self.nav
#
#   def __str__(self):
#     return f"{self.transaction_type} - {self.stock_scheme.name} - {self.units} units"
#
# class NAV(models.Model):
#   stock_scheme = models.ForeignKey(InvestmentOption, on_delete=models.CASCADE, related_name="navs")
#   date = models.DateField()
#   price = models.DecimalField(max_digits=10, decimal_places=4) # NAV for MF, LTP for Stocks
#
#   class Meta:
#     unique_together = ("stock_scheme", "date")
#
#   def __str__(self):
#     return f"{self.stock_scheme.name} - {self.date} - {self.price}"

# class Portfolio(models.Model):
#   client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name="portfolio")
#   scheme = models.ForeignKey(InvestmentOption, on_delete=models.CASCADE)
#   total_units = models.DecimalField(max_digits=10, decimal_places=4, default=0.0)
#   average_price = models.DecimalField(max_digits=10, decimal_places=4, default=0.0)
#   total_sip_amount = models.DecimalField(max_digits=12, decimal_places=4, default=0.0)
#   total_dividends_received = models.DecimalField(max_digits=12, decimal_places=2, default=0.0)
#   def current_value(self):
#     #ALTERNATE
#     # latest_nav = NAV.objects.filter(scheme=self.scheme).order_by("-date").first()
#     # return self.total_units * latest_nav.nav_price if latest_nav else 0
#     latest_nav = self.scheme.navs.order_by("-date").first()
#     return self.total_units * latest_nav.nav_price if latest_nav else 0
#
#   def __str__(self):
#     return f"{self.client.name} - {self.scheme.name}"

# class Dividend(models.Model):
#   client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name="dividends")
#   scheme = models.ForeignKey(InvestmentOption, on_delete=models.CASCADE, related_name="dividends")
#   dividend_date = models.DateField()
#   dividend_per_unit = models.DecimalField(max_digits=10, decimal_places=4)
#   total_dividend = models.DecimalField(max_digits=12, decimal_places=2)  # Total dividend received
#
#   def __str__(self):
#     return f"{self.client.name} - {self.scheme.name} - ₹{self.total_dividend} on {self.dividend_date}"
