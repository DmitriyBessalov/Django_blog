from django.http import JsonResponse, HttpResponse
from apps.article.models import Article
from apps.article.schemas import *

from ninja import Router

router = Router()


@router.post('/')
def article_create(request, payload: ArticleCreate):
    data = payload.dict()
    try:
        Article.objects.create(**data)
        return HttpResponse(status=201)
    except Exception:
        return HttpResponse(status=400)


@router.patch('/{pk}')
def article_update(request, payload: ArticleUpdate, pk):
    data = payload.dict()
    Article.objects.filter(pk=pk).update(**data)
    return HttpResponse(status=204)


@router.get("/all")
def article_view_all(request):
    articles = Article.objects.all()
    data = list(articles.values())
    return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})


@router.get('/{pk}')
def article_view(request, pk):
    article = Article.objects.filter(pk=pk)
    data = list(article.values())
    return JsonResponse(data, safe=False, json_dumps_params={'ensure_ascii': False})


@router.delete('/{pk}')
def article_dell(request, pk):
    Article.objects.filter(pk=pk).delete()
    return HttpResponse(status=204)
