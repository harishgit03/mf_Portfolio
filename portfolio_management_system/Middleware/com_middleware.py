from django.utils.deprecation import MiddlewareMixin
import time
# from dashboard.views import sign_up_new
class CustomSignupMiddleware(MiddlewareMixin):
    def process_response(self, request, response):
        if request.path == "/accounts/signup/" and request.method == "POST":
            time.sleep(2)  # Call second function
            # sign_up_new(request)
        return response
