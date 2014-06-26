ds-debt
=======
This app is based on a wireframe shared with me.  It gives me a project to test out animated navigation techniques.

The current site uses a state based ui-router to navigate partials with content.  The wire frame concept differs
from the current app in the following:

- right side nav column [currently left side nav column]
- exclamation marker in nav button for uncompleted content menus [currently no marker, but check shows after completion]
- ability to edit through nav column nonlinearly - skip around content form partial sections [currently linear progression only with backtracking ability]
- information shown about owners (name from different partial) in the company description []
- progress bar from estimate to offer filled in based on paritals' content form completions[]
- key factors information bar at bottom of content partial with useful advice about filling in the section[]

These features are prioritized after the general design has been emulated.

The site itself is based on four form inputs with a placeholder for an optional 5th.

1. company description
2. owner info
3. debtor goals
4. financials
5. optional placeholder

These are shown persistently regardless of view.  In addition there are persistent items to show and adjust based on form input.
The final or first item shown is a signed in w/ [email] displaying the need for a sign in page.  Testing the current site 
found that the sign in with email is the landing page, but there is no current summary page to display overall progress
in detail besides the progress bar to complete.

Further development includes a summary with details from partial content formfills, animated item display, 

Steps to complete in order:

1. Design emulated layout
2. Adjust for site differences

Steps to complete in no particular order:
- Modify new site for summary page landing after login if email recognized.
- Determine data model on form completion.
- Detail commit logic for uncompleted forms.
