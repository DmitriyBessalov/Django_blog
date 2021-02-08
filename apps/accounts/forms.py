from django import forms


class AddPostForm(forms.Form):
    title = forms.CharField(max_length=255)
    slug = forms.SlugField(max_length=255)
    content = forms.CharField(widget=forms.Textarea(attrs={'cols': 60, 'rows': 10}))
    is_published = forms.BooleanField(required=False)

    CHOICES = (
        ('qg', '22'),
        ('33', '44'),
        ('45', '55'),
    )
    cat = forms.ChoiceField(choices=CHOICES, required=False)
    like = forms.ChoiceField(choices=CHOICES, widget=forms.RadioSelect)
    Countries = forms.MultipleChoiceField(choices=CHOICES, widget=forms.SelectMultiple)

    date1 = forms.DateField(label="Дата", widget=forms.DateInput(attrs={'type': 'date'}))
    file = forms.FileField()


