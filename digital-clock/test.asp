<%
Dim p, rapams. method
method = Request("REQUEST_METHOD")

If method = "POST" Then
    Set params = Request.Form
Else
    Set params = Request.QueryString
End If

Response.Write "<h1> Метод " & method & "</h1>"

For easch p in params
    Response.Write p & ":" & params(p) & "<br>"
Next

%>