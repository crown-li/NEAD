from django.http import JsonResponse

def get_start(request):
    return JsonResponse("NuxtJs(Vue)+Element Plus+Axios+Django", safe=False)