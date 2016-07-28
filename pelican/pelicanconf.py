#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
import re
import os

AUTHOR = u'charlesreid1'
SITENAME = u'dang-pelican-barebones'

# If you are running pelican and hosting locally,
#SITEURL = ''

# Otherwise, if you're making content for Github Pages,
#SITEURL='/dang-pelican-barebones'
SITEURL=''

PATH = 'content'
TIMEZONE = 'America/Los_Angeles'
DEFAULT_LANG = u'en'

# the theme 
THEME = 'simple-angular'

# template locations 
EXTRA_TEMPLATES_PATHS = ['angular']


# template files 
TEMPLATE_PAGES = {'hello.html':'hello.html'}



# Don't try to turn HTML files into pages
READERS = {'html': None}

# --------------8<---------------------

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
RELATIVE_URLS = False
