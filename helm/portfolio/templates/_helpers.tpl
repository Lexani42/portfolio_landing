{{- define "devops-portfolio.name" -}}
devops-portfolio
{{- end -}}

{{- define "devops-portfolio.fullname" -}}
{{ .Release.Name }}-{{ include "devops-portfolio.name" . }}
{{- end -}}